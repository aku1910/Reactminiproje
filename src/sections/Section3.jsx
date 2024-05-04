import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Section3.css';
import { MdOutlinePerson } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import debounce from 'lodash/debounce';
import { useNavigate } from 'react-router-dom';


const Section3 = () => {
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
    const navigate = useNavigate()

    const gocreator = (user) => {
        navigate(`/creator/${user.id}`, { state: { member: user } })
    }

    return (
        <div className='section3head'>
            <div className='sectionhead'>
                <button className='creators'>ÜZVLƏRİMİZ</button>
                <h1>Top bəxşiş toplayanlar</h1>
                <p>Siz də öz yaradıcılıq fəaliyyətinizdən qazanan şəxslərdən olun.</p>
            </div>
            <div className='flex justify-center'>
                <input
                    className="inputcolor border w-full h-12"
                    type="text"
                    value={searchItem}
                    onChange={handleInputChange}
                    placeholder='Search'
                />
            </div>
            <div className='users'>
                {searchNotFound ? (
                    <p>No users found</p>
                ) : (
                    (filteredUsers.length === 0 ? apiUsers : filteredUsers).map((user) => (
                        <div key={user.id} className='userinfo' onClick={() => gocreator(user)}>
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

export default Section3;
