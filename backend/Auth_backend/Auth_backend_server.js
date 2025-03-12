import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
import session from "express-session";
import cors from "cors";
import MemoryStore from "memorystore"; // Install using `npm install memorystore`

const MemoryStoreInstance = MemoryStore(session);

const app = express();
const port = 3000;
const saltRounds = 10;

// ✅ Enable JSON parsing for request bodies
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Ensure CORS works properly
app.use(
  cors({
    origin: "http://localhost:5173", // Adjust based on frontend URL
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true, // Allow cookies/sessions
  })
);

// ✅ Express session setup
app.use(
  session({
    secret: "TOPSECRETWORD",
    resave: false,
    saveUninitialized: false,
    // store: new MemoryStoreInstance({ checkPeriod: 86400000 }), // 1 day
    // cookie: { httpOnly: true, secure: false, maxAge: 24 * 60 * 60 * 1000 }, // 1 day
  })
);

app.use(passport.initialize());
app.use(passport.session());

// ✅ PostgreSQL connection
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "use",
  password: "Arora@1976",
  port: 5432,
});

db.connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch((err) => console.error("❌ Database connection error:", err));

// ✅ Passport authentication strategy
passport.use(
  new Strategy(async function verify(username, password, cb) {
    try {
      const result = await db.query("SELECT * FROM users WHERE email = $1", [username]);

      if (result.rows.length === 0) {
        return cb(null, false, { message: "User not found" });
      }

      const user = result.rows[0];
      const storedHashedPassword = user.password;

      bcrypt.compare(password, storedHashedPassword, (err, valid) => {
        if (err) return cb(err);
        if (valid) {
          return cb(null, { id: user.id, full_name: user.full_name, email: user.email });
        } else {
          return cb(null, false, { message: "Incorrect password" });
        }
      });
    } catch (err) {
      console.log(err);
      return cb(err);
    }
  })
);

// ✅ Serialize & Deserialize Users
passport.serializeUser((user, cb) => {
  console.log("Serializing user:", user);  // Debugging log
  cb(null, user.id);
});


passport.deserializeUser(async (id, cb) => {
  console.log("🔍 Deserializing User ID:", id); // Debugging log

  try {
    const result = await db.query("SELECT id, full_name, email FROM users WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      console.log("❌ No user found in database for ID:", id);
      return cb(null, false);
    }

    console.log("✅ User deserialized:", result.rows[0]);
    cb(null, result.rows[0]); // Attach user to req.user
  } catch (err) {
    console.error("❌ Error in deserializeUser:", err);
    cb(err);
  }
});


// ✅ Check authentication status (Added at the correct position)
app.get("/check-auth", (req, res) => {
  console.log("Session:", req.session);
  console.log("User:", req.user);
  if (req.isAuthenticated()) {
    res.json({ authenticated: true, user: req.user });
  } else {
    res.json({ authenticated: false });
  }
});

// ✅ Login Route
app.post("/login", (req, res, next) => {
  console.log("Login Request:", req.body); // Debugging log

  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).json({ success: false, error: "Internal Server Error" });
    if (!user) return res.status(401).json({ success: false, error: "Invalid credentials" });

    req.login(user, (err) => {
      if (err) return res.status(500).json({ success: false, error: "Login failed" });

      console.log("✅ Login successful:", user); // Log the authenticated user
      res.json({ success: true, message: "Login successful", user });
    });
  })(req, res, next);
});


// ✅ Register Route
app.post("/register", async (req, res) => {
  const { full_name, username: email, password } = req.body;

  console.log("📩 Incoming Registration Request:", req.body); // Debugging log

  try {
    // Check if user already exists
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if (checkResult.rows.length > 0) {
      console.log("⚠️ User already exists!");
      return res.status(400).json({ success: false, error: "User already exists" });
    }

    // Hash password
    const hash = await bcrypt.hash(password, saltRounds);

    // Insert new user
    const result = await db.query(
      "INSERT INTO users (full_name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [full_name, email, hash]
    );

    const user = result.rows[0];

    console.log("✅ User Registered:", user);
    res.json({ success: true, message: "User registered successfully", user });

  } catch (err) {
    console.error("❌ Registration Error:", err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});


// ✅ Start Server
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
