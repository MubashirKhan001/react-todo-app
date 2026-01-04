import Todo from "./Todo";

function App() {
    return (
        <div className="min-h-screen flex mt-6 flex-col items-center justify-center bg-gray-50">
            <h1 className="text-3xl font-extrabold text-orange-600 mb-6">MY-TODO-APP!</h1>
            <Todo />
        </div>
    )

}

export default App;
