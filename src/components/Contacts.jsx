// import React from 'react';
// import { Text, View, FlatList, TouchableOpacity ,Dimensions} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import styles from './ContactsStyles';
// const { width } = Dimensions.get('window');


// const Contacts = ({ contacts, onNextPage, onPrevPage }) => {
//     const renderContactItem = ({ item }) => {
//         const initials = item.name.slice(0, 1);
//         return (
//             <View style={styles.contactItem}>
//                 <View style={styles.contactInitial}>
//                     <Text style={styles.initialText}>{initials}</Text>
//                 </View>
//                 <View style={styles.contactInfo}>
//                     <Text style={styles.contactText}>{item.name}</Text>
//                     <View style={styles.phoneContainer}>
//                         <Icon name="phone-in-talk" size={14} color="#000" style={styles.phoneIcon} />
//                         <Text style={styles.phoneText}>{item.phone}</Text>
//                     </View>
//                 </View>
//                 <TouchableOpacity onPress={() => console.log('Delete pressed')}>
//                     <Icon name="delete" size={20} color="#9C3353" style={styles.deleteIcon} />
//                 </TouchableOpacity>
//             </View>
//         );
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.heading}>
//                 <View style={styles.leftSection}>
//                     <MaterialCommunityIcons name="account-group" size={24} color="#000" style={styles.icon} />
//                     <Text style={styles.headingText}>Team Members</Text>
//                 </View>
//                 <MaterialCommunityIcons name="information" size={24} color="#339C8E" />
//             </View>
//             <FlatList
//                 data={contacts}
//                 renderItem={renderContactItem}
//                 keyExtractor={(item, index) => index.toString()}
//                 pagingEnabled
//                 showsHorizontalScrollIndicator={false}
//                 snapToInterval={width}
//                 decelerationRate="fast"
//                 onEndReachedThreshold={0.5}
                
//             />
//             <View style={styles.paginationContainer}>
//                 <TouchableOpacity onPress={onPrevPage} style={styles.paginationButton}>
//                     <Text style={styles.paginationText}>Previous</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={onNextPage} style={styles.paginationButton}>
//                     <Text style={styles.paginationText}>Next</Text>
//                 </TouchableOpacity>
//             </View>
//             <TouchableOpacity style={styles.button} onPress={() => console.log('Button Pressed')}>
//                 <Text style={styles.buttonText}>Add Members</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// export default Contacts;


import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './ContactsStyles';

const { width } = Dimensions.get('window');
const contactsPerPage = 5; // Show 5 contacts per page

const Contacts = ({ contacts, onNextPage }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [paginatedContacts, setPaginatedContacts] = useState([]);

  // Paginate contacts into groups of 5
  const paginateContacts = (contacts, page) => {
    const startIndex = page * contactsPerPage;
    const endIndex = startIndex + contactsPerPage;
    return contacts.slice(startIndex, endIndex);
  };

  // Load contacts for the current page
  useEffect(() => {
    const paginated = paginateContacts(contacts, currentPage);
    setPaginatedContacts(prevContacts => [...prevContacts, ...paginated]);
  }, [currentPage, contacts]);

  // Handle render for each contact
  const renderContactItem = ({ item }) => {
    const initials = item.name.slice(0, 1).toUpperCase(); // Get first letter of name
    return (
      <View style={styles.contactItem}>
        <View style={styles.contactInitial}>
          <Text style={styles.initialText}>{initials}</Text>
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.contactText}>{item.name}</Text>
          <View style={styles.phoneContainer}>
            <Icon name="phone-in-talk" size={14} color="#000" style={styles.phoneIcon} />
            <Text style={styles.phoneText}>{item.phone}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => console.log('Delete pressed')}>
          <Icon name="delete" size={20} color="#9C3353" style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>
    );
  };

  // Handle the end of the list, load next page
  const handleLoadMore = () => {
    if ((currentPage + 1) * contactsPerPage < contacts.length) {
      setCurrentPage(prevPage => prevPage + 1);
      onNextPage && onNextPage(); // Optionally, call onNextPage function from parent
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.leftSection}>
          <MaterialCommunityIcons name="account-group" size={24} color="#000" style={styles.icon} />
          <Text style={styles.headingText}>Team Members</Text>
        </View>
        <MaterialCommunityIcons name="information" size={24} color="#339C8E" />
      </View>

      <FlatList
        data={paginatedContacts}
        renderItem={renderContactItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5} // Trigger load more when 50% of the list is reached
        ListFooterComponent={
          <View style={{ padding: 10 }}>
            <Text style={{ textAlign: 'center', color: '#666' }}>Loading more...</Text>
          </View>
        }
      />

      <TouchableOpacity style={styles.button} onPress={() => console.log('Add Members Pressed')}>
        <Text style={styles.buttonText}>Add Members</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Contacts;
