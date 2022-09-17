
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal
} from '@iconscout/react-unicons';

import img1 from '../Images/img1.png'
import img2 from '../Images/img2.png'
import img3 from '../Images/img3.png'


export const SideBarData= [

    {
        id:1,
        heading: "Dashboard",
        icon: UilEstate
    },
    {
        id:2,
        heading: "Orders",
        icon: UilClipboardAlt
    },
    {
        id:3,
        heading: "Customers",
        icon: UilUsersAlt
    },
    {
        id:4,
        heading: "Products",
        icon: UilPackage
    },
    {
        id:5,
        heading: "Analytics",
        icon: UilChart
    },
]

export const CardsData =[
    {
        title: 'Sales',
        color:{
            backgroundColor: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
            boxShadow: '0px 10px 20px 0px #e0c6f5'
        },
        barValue: 70,
        value: '25,970',
        png: UilUsdSquare,

        series:[
            {
                name: 'Sales',
                data: [31, 40, 28, 51, 42, 109, 100]
            }
        ]

    },

    {
        title: 'Revenue',
        color:{
            backgroundColor: 'linear-gradient(180deg, #ff919d 0%, #fc929d 100%)',
            boxShadow: '0px 10px 20px 0px #fdc0c7'
        },
        barValue: 80,
        value: '14,270',
        png: UilMoneyWithdrawal,

        series:[
            {
                name: 'Revenue',
                data: [10, 100, 50, 70, 80, 30, 40]
            }
        ]

    },
 
    
    {
        title: 'Expenses',
        color:{
            backgroundColor: 'linear-gradient(rgb(248 212 154) -146.42%, rgb( 255 202 113) -46.42%)',
            boxShadow: '0px 10px 20px 0px #f9d59b'
        },
        barValue: 60,
        value: '4,270',
        png: UilClipboardAlt,

        series:[
            {
                name: 'Expenses',
                data: [10, 25, 15, 30, 12, 15, 20]
            }
        ]

    }
]

export const updateData=[
    {
        id:1,
        img: img1,
        name: 'Andrew Thomas',
        noti: 'has ordered Apple smart watch 2550mh battery ',
        time: '25 seconds ago'
    },
    {
        id:2,
        img: img2,
        name: 'James Bond',
        noti: 'has recieved Samsung gadget for charging battery ',
        time: '30 minutes ago'
    },
    {
        id:3,
        img: img3,
        name: 'Iron Man',
        noti: 'has ordered Apple smart watch, Samsung Gear 2550mh battery ',
        time: '2 hours ago'
    },
]