import './form.css'

function Form() {
    return (
        <div className='parent-form'>
                <form className='form-form' action="handler.php">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </form>
            </div>
    )
}


export default Form;