import React from 'react'

export const SignUp = () => {
    return (
        <div>
            <section className="showcase login">
            <div className="overlay">
                <form className="form">
                    <input type="text" name="username" id="username" placeholder="Username" required />    
                    <input type="email" name="email" id="email" placeholder="Your email address" required />
                    <input type="password" name="password" id="password" placeholder="Enter your password" required />
                    <input type="confirm password" name="confirm password" id="confirm password" placeholder="Confirm your password" required />
                    <button type="submit">Create your account</button>
                </form>
            </div>
        </section>
        </div>
    )
}
