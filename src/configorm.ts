import { DataSource } from "typeorm"

/*const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Wes635689@",
    database: "dioshoppingmao",
    entities: ["entities/*.ts"]
})*/


const dataSourceSQLite = new DataSource({
    type: "sqlite",
    database: "./src/database/database.sqlite",
    entities: ["src/entities/*.ts"],
    synchronize: true,
})

dataSourceSQLite.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export { dataSourceSQLite }