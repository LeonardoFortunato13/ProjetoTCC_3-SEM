
function AppCard() {
    return (
        //usando props para passar os dados pelos componentes
        //adicionando valores das props aqui no card
        <div className="wrapper">
            <Card
                img="https://via.placeholder.com/150"
                title="SalonLine"
                categories="Creme"
                price="R$35,00"
            />
            <Card
                img="https://via.placeholder.com/150"
                title="Shampoo "
                categories="Shampoo"
                price="R$100,00"
            />
           <Card
                img="https://via.placeholder.com/150"
                title="SalonLine"
                categories="Creme"
                price="R$35,00"
            />
            <Card
                img="https://via.placeholder.com/150"
                title="Shampoo "
                categories="Shampoo"
                price="R$100,00"
            />

        </div>
    )

    //criando o card       
    function Card(props) {

        //retornando os componentes
        //passando os valores pelos componenetes do card
        return (
            <div className="card">
                <img src={props.img} class="card_image" />
                <div className="card_body">
                    <h2 className="card_title">{props.title}</h2>
                    <p className="card_categories">{props.categories}</p>
                    <h3 className="card_price">{props.price}</h3>
                    <button className="card_btn">View Recipe</button>
                </div>
            </div>


        )
    }

}

// ReactDOM.render(<AppCard/>, document.getElementById("root1"));
export default AppCard
