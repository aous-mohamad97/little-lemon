import React from "react";
import { Link } from "react-router-dom";
import recipes from "../recipes";
import Swal from "sweetalert2";

const SpecialsSection = () => {
  const handleItemOrder = (itemId, itemTitle) => {
    const alertConfig = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    
    alertConfig.fire({
      title: 'Confirm your order?',
      text: `Add ${itemTitle} to your order?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, add to order!',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        alertConfig.fire(
          'Order Added!',
          `${itemTitle} has been added to your order.`,
          'success'
        );
      }
    });
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This Week's Specials</h2>
        <Link to="/booking">
          <button>Online Menu</button>
        </Link>
      </div>
      <div className="cards">
        {recipes.map((menuItem) => (
          <div key={menuItem.id} className="menu-items">
            <img src={menuItem.image} alt={menuItem.title} />
            <div className="menu-content">
              <div className="heading">
                <h5>{menuItem.title}</h5>
                <p className="price">${menuItem.price}</p>
              </div>
              <p className="description">{menuItem.description}</p>
              <button 
                className="orderbtn" 
                onClick={() => handleItemOrder(menuItem.id, menuItem.title)}
                aria-label={`Order ${menuItem.title}`}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialsSection;
