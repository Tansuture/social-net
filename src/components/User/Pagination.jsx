import s from './Users.module.css'


const Pagination = ({postsPerPage, totalCount,changePage,currentPage}) => {
 
    let pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCount / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>

            <ul className={s.pagination}>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => {changePage(number)}} className={currentPage === number ? s.active : ""}>{number}</a>
                    </li>
                     ))
                }   
            </ul>

        </div>
    )

}

export default Pagination