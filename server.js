const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use("/api/companies", require("./routes/companyRoutes"));
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/deals", require("./routes/dealRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/users", require("./routes/userRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
