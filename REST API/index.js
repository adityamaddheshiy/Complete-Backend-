import express from "express"
import users from './MOCK_DATA.json' with {type: "json"};


const app = express();
const PORT = 3000;


app.get('/api/users', (req, res) => {
    return res.json(users)
})

app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;

    res.send(html);
});


// Dynamic Parameter  means Search user using their id 
app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) {
        res.status(404).json({
            message: "User not found "
        });
    }
    res.json(user);
})


app.route('/api/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        if (!user) {
            res.status(404).json({
                message: "User not found "
            });
        }
        res.json(user);
    }).patch((req,res)=>{
        // Update the user details from the
        return res.json({status: "pending "})
    }).delete((req,res)=>{
        // delete the user details from the database 
        return res.json({status: "pending "})
    })





app.listen(PORT, () => {
    console.log(`server is runnin on ${PORT}`);

})