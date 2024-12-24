// src/components/CheckoutModal.jsx
export function CheckoutModal() {
    return (
      <dialog id="checkout" className="checkout-modal">
        <form method="dialog">
          <h2>Checkout</h2>
          <div>
            <label>
              Name:
              <input type="text" required />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input type="email" required />
            </label>
          </div>
          <div>
            <label>
              Card Number:
              <input style={{width: "50%", height: "40px"}} type="text" pattern="\d{16}" placeholder="1234567890123456" required />
            </label>
          </div>
          <div className="actions">
            <button type="button" onClick={() => window.checkout.close()}>Cancel</button>
            <button type="submit">Complete Purchase</button>
          </div>
        </form>
      </dialog>
    );
  }