import { Column, Entity, PrimaryColumn, CreateDateColumn} from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('produtos')   
class Produto{

    @PrimaryColumn()
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

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export { Produto } 