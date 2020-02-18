import question from './question';
interface questionStateInterface  {
    questions:question[],
    attempted:number,
    correct:number,
    lastQuestion:object | false

}

export default questionStateInterface;