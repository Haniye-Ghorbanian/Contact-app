const ContactListTabelItem = (props) => {
    console.log(props)
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={props.data.picture.thumbnail}/>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{`${props.data.name.title} ${props.data.name.first} ${props.data.name.last}`}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{props.data.phone}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{props.data.email}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button className="text-indigo-600 hover:text-indigo-900">
          Send Message
        </button>
        <button className="text-indigo-600 hover:text-indigo-900 ml-2">
          Call
        </button>
      </td>
    </tr>
  );
};


export default ContactListTabelItem;