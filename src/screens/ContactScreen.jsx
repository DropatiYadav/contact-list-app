import React, { useState, useEffect } from 'react';
import Contacts from '../components/Contacts';

const ContactScreen = () => {
    const [currentContacts, setCurrentContacts] = useState([]);
    const [page, setPage] = useState(1);

    const contactsData = [
        { name: 'Test1', phone: '9999999999' },
        { name: 'Test2', phone: '9999999998' },
        { name: 'ATest3', phone: '9999999997' },
        { name: 'BTest4', phone: '9999999996' },
        { name: 'CTest5', phone: '9999999995' },
        { name: 'DTest6', phone: '9999999994' },
        { name: 'ETest7', phone: '9999999993' },
        { name: 'FTest8', phone: '9999999992' },
        { name: 'GTest9', phone: '9999999991' },
        { name: 'HTest10', phone: '9999999990' },
        { name: 'ITest11', phone: '9999999981' },
        { name: 'JTest12', phone: '9999999982' },
        { name: 'KTest13', phone: '9999999983' },
        { name: 'LTest14', phone: '9999999984' },
        { name: 'MTest15', phone: '9999999985' },
        { name: 'NTest16', phone: '9999999986' },
        { name: 'OTest17', phone: '9999999987' },
        { name: 'PTest18', phone: '9999999988' },
        { name: 'QTest19', phone: '9999999989' },
        { name: 'RTest20', phone: '9999999970' },
    ];

    const loadMoreContacts = () => {
        const startIndex = page * 5 - 5;
        const endIndex = page * 5;
        const newContacts = contactsData.slice(startIndex, endIndex);

        if (newContacts.length > 0) {
            setCurrentContacts(prevContacts => [...prevContacts, ...newContacts]);
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        loadMoreContacts();
    }, []);

    return (
        <React.Fragment>
            <Contacts contacts={currentContacts} onNextPage={loadMoreContacts} />
        </React.Fragment>
    );
};

export default ContactScreen;

