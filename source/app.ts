require("dotenv-safe").config();
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import debug from "debug";
import * as express from "express";
import * as session from "express-session";
import * as expressWinston from "express-winston";
import * as helmet from "helmet";
import * as http from "http";
import * as sassMiddleware from "node-sass-middleware";
import * as path from "path";
import "reflect-metadata";
import * as winston from "winston";
import { CommonRoutesConfig } from "./Common";
import { IndexRoutes, UsersRoutes } from "./Routes";

const app: express.Application = express();
const server: http.Server = http.createServer(app);

const port = 3000;

const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug("app");

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(
  session({
    name: "qid",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    },
  })
);

app.use(cors());

app.use(helmet());

app.use(
  sassMiddleware({
    src: path.join(__dirname, "../public"),
    dest: path.join(__dirname, "../public"),
    indentedSyntax: true,
    sourceMap: true,
    outputStyle: "compressed",
  })
);

app.use(express.static(path.join(__dirname, "../public")));

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  ),
};

if (!process.env.DEBUG) {
  loggerOptions.meta = false;
}

app.use(expressWinston.logger(loggerOptions));

routes.push(new UsersRoutes(app));
routes.push(new IndexRoutes(app));

const runningMessage = `Server running at http://localhost:${port}`;

server.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    debugLog(`Routes configured for ${route.getName()}`);
  });
  console.log(runningMessage);
});
