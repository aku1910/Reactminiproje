import React, { useEffect, useState } from 'react'
import { MdOutlinePerson } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import axios from 'axios';
import { CiFilter } from "react-icons/ci";
import debounce from 'lodash/debounce';
import { useNavigate } from 'react-router-dom';




const Blogsection1 = () => {
    const [apiUsers, setApiUsers] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchNotFound, setSearchNotFound] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/users');
                setApiUsers(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const debouncedHandleInputChange = debounce((searchTerm) => {
        setSearchItem(searchTerm);
        if (!searchTerm) {
            setFilteredUsers([]);
        } else {
            const filteredItems = apiUsers.filter((user) =>
                user.name.toLowerCase().includes(searchTerm)
            );
            setFilteredUsers(filteredItems);
            setSearchNotFound(filteredItems.length === 0);
        }
    }, 100);

    const handleInputChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        debouncedHandleInputChange(searchTerm);
    };
    const navigate=useNavigate()

    const gocreator=(user)=>{
        navigate(`/creator/${user.id}`, {state:{member:user}})
    }

    return (
        <div >
            <div className='flex justify-around items-center flex-wrap'>
                <div>
                    <h1 className='text-[30px] font-bold'>🚀 Bloq yazıları</h1>
                    <p className='text-gray-500 text-[19px]'>İstənilən mövzuda yazıçıların hekayələrini, düşüncələrini və <br /> təcrübələrini kəşf edin.</p>
                </div>
                <div className='flex gap-[10px] flex-wrap'>
                    <input
                        className="border p-[10px] border-gray-300 text-gray-500 w-[260px] h-[50px]"
                        type="text"
                        value={searchItem}
                        onChange={handleInputChange}
                        placeholder='Search'
                    />
                    <button className='blogbutton'>Filtr< CiFilter /></button>
                </div>
            </div>
            <div className='users'>
                {searchNotFound ? (
                    <p>No users found</p>
                ) : (
                    (filteredUsers.length === 0 ? apiUsers : filteredUsers).map((user) => (
                        <div key={user.id} className='userinfo' onClick={()=>gocreator(user)}>
                            <img className='image' src={user.image} alt={user.name} />
                            <h1 className='name'>{user.name}</h1>
                            <p className='info'>{user.info}</p>
                            <div className='supporter'>
                                <MdOutlinePerson />
                                <span>{user.supporter}</span>
                            </div>
                            <div className='location'>
                                <BsGlobe />
                                <span>{user.location}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};


export default Blogsection1