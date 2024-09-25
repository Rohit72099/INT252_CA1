
// import './From.css';
function Form(){
    return(
        <>
        
        <div class="outer">
        <div class="inner">
        <div class="form-container">
        <h1>Get in Touch</h1>
        
        <form>
            <div class="form-group">
                <div>
                    <label for="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name" class="half-width" required/>
                </div>
                <div>
                    <label for="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name" class="half-width" required/>
                </div>
            </div>
            <div class="form-group">
                <div>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" class="half-width" required/>
                </div>
                <div>
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" class="half-width" required/>
                </div>
            </div>
            <div class="form-group">
                <label for="about">About</label>
                <textarea id="about" name="about" rows="4" required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
            
        </div>
    </div>
        
        </>
    )
}

export default Form;