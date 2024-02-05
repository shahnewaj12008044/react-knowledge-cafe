import React from 'react';

const Questions = () => {
    return (
        <div>
            <h1>What are the differences between props and state</h1>
            <p>1.Props is used for passing data from the parent component to child component while state is a hook which is used to save data of  webpage which value can be changed.
              2. The core difference is state is managed within the component while props is passed to child component
            </p>
            <h1>How does useState works?</h1>
            <p>The useState hook works for store the data which value can change within interactions. It takes two values one is intial value and the other is a function which can set the updated value to the variable</p>
            <h1>What is the purpose of useEffect accept dataLoading</h1>
            <p>1.updating data: useEffect is called after every render of the component , including the initial render
                2.By use effect we can specify the dependencies in the second argument
                3.Declaring Side Effects:useEffect can be defined within a fucntion by passing a callback function and the callback function will be executed after the component has been rendered
            </p>
            <h1>How does react work</h1>
            <p>react depends  on a virtual dom which is the copy of the actual dom whenever any changes occured react compare the virtual dom with the actual dom and changes exactly where the changes made
                React compare the virtual dom with the actual dom with diffing algorithm and it alows react to perform faster
            </p>
        </div>
    );
};

export default Questions;