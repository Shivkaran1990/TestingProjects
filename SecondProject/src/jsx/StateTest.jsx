import React from 'react'
class StateTest extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            header:"Shivkaran Test for Header",
            content:"Test content for content"
        }
    }
    render()
    {
         return(
             <div>
                 {this.state.header}
                 <br/>

                 {this.state.content}
             </div>
         );
    }
}

export default StateTest;