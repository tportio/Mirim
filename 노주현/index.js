const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// 쿼리 생성 - 쿼리가 들어오면 응답할 자료형
const schema = buildSchema(`
    type Query {
        hello: String,
        movies: [Movie]
    }

    type Movie {
        title: String,
        rating: Int
    }
`);

// resolver - 요청에 따라 응답 데이터
const root = {
    hello: () => "hello World",
    movies: (args, context, info) => {
        console.log(context);

        return [
            {title:"말할 수 없는 비밀", rating:5},
            {title:"비와 당신의 이야기", rating:3},
            {title:"분노의 질주", rating:4},
        ];
    }
};

const app = express();

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.render('index.html');
})

app.listen(4000, () => {
    console.log("listening on 4000!")
});