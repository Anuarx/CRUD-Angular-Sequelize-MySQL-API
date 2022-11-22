import express, { Application, Request, Response } from "express";
import cors from 'cors'
import routesProducto from "../routes/producto";
import db from "../db/connection";

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3001";
    this.listen();
    this.middlewares();
    this.routes();
    this.dbConnect();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Aplicacion corriendo en el puerto ${this.port}`);
    });
  }

  routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.json({
        msg: "API Working",
      });
    });
    this.app.use("/api/productos", routesProducto);
  }

  middlewares() {
    // Parseamos el body

    this.app.use(express.json());

    // Cors

    this.app.use(cors());
  }

  async dbConnect() {
    await db.authenticate();
    console.log("base de datos conectada");
  }
}
export default Server;
