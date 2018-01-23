Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },


  render: function() {
    var contacts = this.props.items.map(function(contact) {
        return (<Contact key={contact.id} item={contact}>Item {contact.id}</Contact>)
        // return React.createElement(Contact, {item: contact, key: contact.id});
    });

    console.log(contacts);

    return (
      <div className={'contactsList'}>
        {contacts}
      </div>
    );
  }
});