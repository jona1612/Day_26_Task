function Card(props) {
    return (
        <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">{props.data.title}</h5>
                    <h6 class="card-price text-center">{props.data.rate}<span class="period">/month</span></h6>
                    <hr></hr>
                    <ul class="fa-ul">
                        {
                            props.data.features.map((e) => {
                                return <li className={`${e.bold ? `fw-bold` : ``} ${e.mute ? `text-muted` : ``}`}> <span class={e.isBold ? `fw-bold` : ``}> {e.names} </span> {e.name} <span class="fa-li"><i class={e.mute ? `fas fa-times` : `fas fa-check`}></i></span> </li>
                            })
                        }
                    </ul>
                    <div class="d-grid">
                        <a href="#" class="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;