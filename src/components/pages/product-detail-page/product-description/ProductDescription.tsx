interface Props {
    
}

export function ProductDescription({}: Props) {

    return (
        //Todo delete the second div tag and use this component twice for each div with different data on the product-detail page
        <>
            <div className="mb-5 pt-7">
                <h4 className="text-secondary-400 text-sm sm:text-base lg:text-xl mb-3 font-bold">The
                    standard
                    Lorem Ipsum passage, used since the 1500s</h4>
                <p className="text-secondary-100 text-sm lg:text-base text-justify">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
            <div className="mb-5  pt-4">
                <h4 className="text-secondary-400 text-sm sm:text-base lg:text-xl mb-3 font-bold">Section
                    1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h4>
                <p className="text-secondary-100 text-sm lg:text-base text-justify">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                    sit
                    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
                    et
                    dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                    nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
            </div>
        </>
    );
}