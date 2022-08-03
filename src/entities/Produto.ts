import { Column, Entity, PrimaryColumn, CreateDateColumn, PrimaryGeneratedColumn} from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('produtos')   
class Produto{
    
    @PrimaryColumn()
    @PrimaryGeneratedColumn("uuid")
    readonly id:  string

    @Column()
    cod: string

    @Column() 
    nome: string

    @Column()
    descricao: string

    @Column()
    preco: number

    @Column()
    urlImagem: string

    @CreateDateColumn()
    created_at: Date
}

export { Produto } 