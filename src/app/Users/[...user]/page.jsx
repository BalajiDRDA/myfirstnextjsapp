
export default async function Userpage({params}) {
    const {user} = await params;
    console.log("va",user);
    return (
        <div>
            <h1>{user}</h1>
        </div>
    );  
}