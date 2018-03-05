    class Leftside extends React.Component{
    constructor(){
        super();
        this.state ={
            theword:""
        }
    }
    render(){
    function hello(){
        console.log("hello")
    }
    return (
        <h1 className='LeftsideClass'>
            <input onChange={(e) =>{
                this.setState({theword:e.target.value});
            }} />
            <button onClick={hello} >click me</button>
            This is the Left
            </h1>
    )
}
    }