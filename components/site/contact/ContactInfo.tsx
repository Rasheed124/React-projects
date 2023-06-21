


    type Props = {
        contacts: Contact[];
    };


const ContactInfo = ({contacts} :Props ) => {
 

    return (

        <>
        {contacts.map( contact => (
            <section className="py-14 " key={contact._id}>
                    <div className="flex flex-col max-w-6xl mx-auto  ">
                        <div className=" pb-5 px-5 text-center">
                            <h4 className="font-migra-light text-7xl ">{contact.heading}</h4>
                        </div>
                        <div className="self-center mt-10">
                            
                        </div>

                    </div>
                </section>
        ))}
       


        </>
    )

}

export default ContactInfo