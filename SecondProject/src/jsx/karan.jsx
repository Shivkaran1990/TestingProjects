import React from  'react'

class karan extends React.Component
{
    render()
        {
            var i = 1;
            var myStyle = {
                fontSize: 100,
                color: '#ff4dcf'
            }
            return(
                <div>
                     Karan New Application
                    <h1 style={myStyle}>Headerds</h1>
                    <h2>Content</h2>
                    <h1>{1+1}</h1>
                    <h1>{i == 1 ? 'false!' : 'true'}</h1>
                    <p data-myattribute = "somevalue">This is the content!!!</p>
                </div>
           );
        }
}
export default karan;