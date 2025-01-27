import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginTop:50,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 9,
    borderColor: '#ddd',
    borderWidth: 0.1,
  },
  contactInitial: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#D9B2BE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  initialText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactInfo: {
    flex: 1,
  },
  contactText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneIcon: {
    marginRight: 5,
  },
  phoneText: {
    fontSize: 14,
    color: '#666',
  },
  deleteIcon: {
    marginLeft: 20,
  },
  button: {
    backgroundColor: '#9C3353',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    alignSelf: 'center',
    bottom:100,
    marginTop:220
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;

