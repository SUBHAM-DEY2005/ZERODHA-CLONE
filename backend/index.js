require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require("cookie-parser");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { WatchListModel } = require("./model/WatchListModel");
const UserModel = require('./model/UserModel');

const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URL;

const app = express();

const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('CORS Error'));
        }
    },
    credentials: true
}));


app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(bodyParser.json());


// app.get('/addHoldings', async (req, res) => {
//     let tempHolding = [
//             {
//                 name: "BHARTIARTL",
//                 qty: 2,
//                 avg: 538.05,
//                 price: 541.15,
//                 net: "+0.58%",
//                 day: "+2.99%",
//             },
//             {
//                 name: "HDFCBANK",
//                 qty: 2,
//                 avg: 1383.4,
//                 price: 1522.35,
//                 net: "+10.04%",
//                 day: "+0.11%",
//             },
//             {
//                 name: "HINDUNILVR",
//                 qty: 1,
//                 avg: 2335.85,
//                 price: 2417.4,
//                 net: "+3.49%",
//                 day: "+0.21%",
//             },
//             {
//                 name: "INFY",
//                 qty: 1,
//                 avg: 1350.5,
//                 price: 1555.45,
//                 net: "+15.18%",
//                 day: "-1.60%",
//                 isLoss: true,
//             },
//             {
//                 name: "ITC",
//                 qty: 5,
//                 avg: 202.0,
//                 price: 207.9,
//                 net: "+2.92%",
//                 day: "+0.80%",
//             },
//             {
//                 name: "KPITTECH",
//                 qty: 5,
//                 avg: 250.3,
//                 price: 266.45,
//                 net: "+6.45%",
//                 day: "+3.54%",
//             },
//             {
//                 name: "M&M",
//                 qty: 2,
//                 avg: 809.9,
//                 price: 779.8,
//                 net: "-3.72%",
//                 day: "-0.01%",
//                 isLoss: true,
//             },
//             {
//                 name: "RELIANCE",
//                 qty: 1,
//                 avg: 2193.7,
//                 price: 2112.4,
//                 net: "-3.71%",
//                 day: "+1.44%",
//             },
//             {
//                 name: "SBIN",
//                 qty: 4,
//                 avg: 324.35,
//                 price: 430.2,
//                 net: "+32.63%",
//                 day: "-0.34%",
//                 isLoss: true,
//             },
//             {
//                 name: "SGBMAY29",
//                 qty: 2,
//                 avg: 4727.0,
//                 price: 4719.0,
//                 net: "-0.17%",
//                 day: "+0.15%",
//             },
//             {
//                 name: "TATAPOWER",
//                 qty: 5,
//                 avg: 104.2,
//                 price: 124.15,
//                 net: "+19.15%",
//                 day: "-0.24%",
//                 isLoss: true,
//             },
//             {
//                 name: "TCS",
//                 qty: 1,
//                 avg: 3041.7,
//                 price: 3194.8,
//                 net: "+5.03%",
//                 day: "-0.25%",
//                 isLoss: true,
//             },
//             {
//                 name: "WIPRO",
//                 qty: 4,
//                 avg: 489.3,
//                 price: 577.75,
//                 net: "+18.08%",
//                 day: "+0.32%",
//             },
//         ];

//         await HoldingsModel.insertMany(tempHolding);


//         res.send("Done!");
// });



// app.get('/watchlist', async (req, res) => {
//     try {
//         const tempWatchlist = [
//             { name: "INFY", price: 1555.45, percent: "-1.60%", isDown: true },
//             { name: "ONGC", price: 116.8, percent: "-0.09%", isDown: true },
//             { name: "TCS", price: 3194.8, percent: "-0.25%", isDown: true },
//              { name: "KPITTECH", price: 266.45, percent: "3.54%", isDown: false },
//             { name: "QUICKHEAL", price: 308.55, percent: "-0.15%", isDown: true },
//             { name: "WIPRO", price: 577.75, percent: "0.32%", isDown: false },
//             { name: "M&M", price: 779.8, percent: "-0.01%", isDown: true },
//             { name: "RELIANCE", price: 2112.4, percent: "1.44%", isDown: false },
//             { name: "HUL", price: 512.4, percent: "1.04%", isDown: false }
//         ];

//         await WatchListModel.deleteMany({}); // This deletes the "TCS.TO" from your screenshot
//         await WatchListModel.insertMany(tempWatchlist);
//         res.send("Database cleaned and 9 stocks added!");
//     } catch (err) {
//         res.status(500).send(err.message);
//     }
// });



app.get('/allHoldings', async (req, res) => {
    let allHolding = await HoldingsModel.find({});
    res.json(allHolding);
});

app.get('/allPositions', async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
})

app.post('/newOrder', async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    await newOrder.save();

    res.send("Order saved");
})

app.get('/newOrder', async (req, res) => {
    let newOrder = await OrdersModel.find({});
    res.json(newOrder);
})

// GET
app.get("/watchlist", async (req, res) => {
    const data = await WatchListModel.find();
    res.json(data);
});

// POST
app.post("/watchlist", async (req, res) => {
    const newStock = new WatchListModel(req.body);
    const saved = await newStock.save();
    res.json(saved);
});

// DELETE
app.delete("/watchlist/:id", async (req, res) => {
    await WatchListModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});


app.post('/signup', async (req, res) => {
    try {
        const newUser = new UserModel(req.body);
        await newUser.save();
        res.status(201).json({ msg: "Registration successful" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


// --- LOGIN ROUTE ---
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) return res.status(400).json({ error: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid password" });

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET || "default_secret",
            { expiresIn: "7d" }
        );

        res.json({
            message: "Login successful",
            token: token,
            name: user.firstName,
            email: user.email
        });

    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});


const authMiddleware = (req, res, next) => {
    let token = req.headers.authorization;

    if (token && token.startsWith("Bearer ")) {
        token = token.split(" ")[1];
    } else {
        token = req.cookies.token;
    }

    if (!token || token === "null" || token === "undefined") {
        return res.status(401).json({ message: "Invalid or missing token" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "default_secret");
        req.user = decoded;
        next();
    } catch (err) {
        console.log("JWT Verification failed:", err.message);
        return res.status(401).json({ message: "Auth failed" });
    }
};



app.get("/univers", authMiddleware, async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({
            name: user.firstName,
            email: user.email
        });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});



app.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logged out" });
});




app.listen(8080, () => {
    console.log("app started")
    mongoose.connect(url)
    console.log("DB connected")
})

