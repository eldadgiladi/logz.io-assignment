import React, { Component } from 'react'
import PropType from 'prop-types'
import Row from './Row'
import Sorter from "./Sorter";
import Paging from './Paging'
import './Table.css'
class Table extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sortByCol: {
                key: ''
            },
            page: 1
        }
    }

    onSortChange = (key) => {
        this.setState({
            sortByCol: this.props.columns.filter((col) => {
                return col.key === key
            })[0] || { key: '' },
        })
    }

    onPagingUpdate = (page) => {
        this.setState({
            page
        })
    }

    

    render() {

        const rowsPerPage = 10;//defining the number of rows per table page

        const { rows } = this.props;
        let dataArray = Object.keys(rows); // creating array of each product id

        //creating the thead of the table
        const head = <tr>{
            this.props.columns.map((col, index) => {
                return <th key={index}>{col.name}</th>
            })
        }
        </tr>


        //sorting the table
        const sortKey = this.state.sortByCol.key
        if (sortKey !== '') {
            dataArray = dataArray.sort((id1, id2) => {
                const { specialPrint } = this.state.sortByCol;
                let a, b;
                if (specialPrint) {
                    a = specialPrint(rows[id1])
                    b = specialPrint(rows[id2])
                } else {
                    a = rows[id1][sortKey]
                    b = rows[id2][sortKey]
                }

                if (a >= b) {
                    return 1
                }
                return -1
            })
        }


        const { page } = this.state
        //creating the body of the table based on the paging
        const body = dataArray.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((id) => {
            return <Row key={id}
                data={
                    this.props.columns.reduce((accumulator, col) => {
                        if (col.specialPrint) accumulator.push(col.specialPrint(rows[id], id))
                        else accumulator.push(rows[id][col.key])
                        return accumulator;
                    }, [])
                }
            />
        })

        return (
            <div className={'table_div'}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Sorter
                        columns={this.props.columns}
                        onSortChange={this.onSortChange}
                        sortBy={this.state.sortByCol.key}
                    />
                    <Paging
                        rowLength={dataArray.length}
                        onPageChange={this.onPagingUpdate}
                        page={this.state.page}
                    />
                </div>
                <table>
                    <thead>{head}</thead>
                    <tbody>{body}</tbody>
                </table>
            </div>
        )
    }
}

Table.propType = {
    columns: PropType.arrayOf(PropType.shape({
        key: PropType.string.isRequired,
        name: PropType.string.isRequired,
        specialPrint: PropType.func,
        filter: PropType.bool
    })).isRequired,
    rows: PropType.arrayOf(PropType.object)
}

export default Table