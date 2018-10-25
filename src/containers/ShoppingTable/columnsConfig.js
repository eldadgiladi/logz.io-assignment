import React from 'react'
import RemoveBtn from '../RemoveBtn'
import EditItem from '../EditItem';

const columnsConfig = [
    {
        name: 'item',
        key: 'name',
        filter: true
    },
    {
        name: 'quantity',
        key: 'quantity',
        filter: true
    },
    {
        name: 'item price',
        key: 'priceForEach',
        filter: true
    },
    {
        name: 'sum',
        specialPrint: (item) => {
            return item.quantity * item.priceForEach
        },
        key: 'sum',
        filter: true
    },
    {
        name: 'remove',
        specialPrint: (item, id) => {
            return <RemoveBtn id={id} />
        },
        key:'remove'
    },
    {
        name: 'edit',
        specialPrint: (item, id) => {
            return (<EditItem id={id}>
                <button>edit</button>
            </EditItem>
            )
        },
        key:'edit'
    }
]

export default columnsConfig;