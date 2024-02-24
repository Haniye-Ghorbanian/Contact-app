import { useEffect, useState } from "react";
import ContactListTabelItem from "./ContactListItem";

const ContactlistTabelBody = () => {
  const [contacsData, setContacsData] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://randomuser.me/api/?results=50");
      const data = await response.json();
      console.log(data.results)
      setContacsData(data.results)
      console.log(contacsData)
    };
    fetchData();
  }, []);

  return <tbody className="bg-white divide-y divide-gray-200">
    {contacsData.map(contact => (
        <ContactListTabelItem data={contact}></ContactListTabelItem>
    ))}
  </tbody>;
};

export default ContactlistTabelBody;
