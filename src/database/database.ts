import { DataSource } from "typeorm"

const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Wes635689@",
    database: "dioshoppingmao",
    entities: ["entities/*.ts"],
})

export { dataSource}