import { Column, Entity, PrimaryColumn, CreateDateColumn, PrimaryGeneratedColumn} from 'typeorm'

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

    @CreateDateColumn({ default: () => "NOW()" })
    created_at: Date
}

export { Produto } 