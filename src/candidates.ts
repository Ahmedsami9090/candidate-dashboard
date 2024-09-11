import { candidate } from "./candidate.type";
import male0 from './assets/images/male.jpg'
import male1 from './assets/images/male1.jpg'
import male2 from './assets/images/male2.jpg'
import male3 from './assets/images/male3.jpg'
import male4 from './assets/images/male4.jpg'
import female0 from './assets/images/female.jpg'
import female1 from './assets/images/female1.jpg'
import female2 from './assets/images/female2.jpg'
import female3 from './assets/images/female3.jpg'
import female4 from './assets/images/female4.jpg'
import female5 from './assets/images/female5.jpg'


export const candidates: candidate[] = [
    {
        name: 'Alexandra Mackay',
        address: 'Waimanalo',
        phone: '+1 (693) 836-0395',
        rating: 4.1,
        profileImage: female0,
        isNew: false,
        isFollowed : true

    },
    {
        name: 'Nicola Randall',
        address: 'Los Angeles',
        phone: '+1 (023) 180-5771',
        rating: 3.8,
        profileImage: female1,
        isNew: false,

    },
    {
        name: 'Frank Metcalfe',
        address: 'Heartwell',
        phone: '+1 (800) 821-3684',
        rating: 4.8,
        profileImage: male0,
        isNew: true,

    },
    {
        name: 'Joe Lyman',
        address: 'Cogswell',
        phone: '+1 (370) 790-4560',
        rating: 2.9,
        profileImage: male1,
        isNew: true,

    },
    {
        name: 'Dan Avery',
        address: 'Alcova',
        phone: '+1 (255) 132-5530',
        rating: 4.3,
        profileImage: male2,
        isNew: false,

    },
    {
        name: 'Abigail	Pullman',
        address: 'Quincy',
        phone: '+1 (156) 179-3928',
        rating: 3.5,
        profileImage: female2,
        isNew: false,
        isFollowed : true

    },
    {
        name: 'Joshua	Roberts',
        address: 'Bluff City',
        phone: '+1 (789) 191-0596',
        rating: 2.8,
        profileImage: male3,
        isNew: false,

    },
    {
        name: 'Jason	Hamilton',
        address: 'Millsboro',
        phone: '+1 (002) 097-6982',
        rating: 4.8,
        profileImage: male4,
        isNew: true,

    },
    {
        name: 'Olivia	Duncan',
        address: 'Reeds',
        phone: '+1 (099) 323-1835',
        rating: 4.3,
        profileImage: female3,
        isNew: true,

    },
    {
        name: 'Sarah	Parsons',
        address: 'Caruthers',
        phone: '+1 (852) 514-6902',
        rating: 4.6,
        profileImage: female4,
        isNew: false,

    },
    {
        name: 'Bella	Cameron',
        address: 'Delft Colony',
        phone: '+1 (191) 433-9005',
        rating: 4.0,
        profileImage: female5,
        isNew: false,

    }
]