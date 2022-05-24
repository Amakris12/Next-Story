import styles from '../styles/Home.module.css'


export default function payment(){
    function onGooglePayLoaded() {
    window.googlePayClient = new google.payments.api.PaymentsClient({
        environment: "TEST"
    });
    }
    const { googlePayClient } = window;

    const baseCardPaymentMethod = {
    type: "CARD",
    parameters: {
        allowedCardNetworks: ["VISA", "MASTERCARD"],
        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"]
    }
    };
    const googlePayBaseConfiguration = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [baseCardPaymentMethod]
    };
     useEffect(() => {
    googlePayClient
        .isReadyToPay(googlePayBaseConfiguration)
        .then(res => {
            if (res.result) {
            createAndRenderPayButton();
            } else {
            alert("Unable to pay using Google Pay");
            }
        })
        .catch(function (err) {
            console.error("Error determining readiness to use Google Pay: ", err);
        });
    }, []);
    function processPayment() {
        // ...
    googlePayClient
        .loadPaymentData(paymentDataRequest)
        .then(function (paymentData) {
        console.log(paymentData);
        })
        .catch(function (err) {
        console.log(err);
        });
    }
    const cardPaymentMethod = {
        type: "CARD",
        tokenizationSpecification: tokenizationSpecification,
        parameters: {
            allowedCardNetworks: ["VISA", "MASTERCARD"],
            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
            billingAddressRequired: true,
            billingAddressParameters: {
            format: "FULL",
            phoneNumberRequired: true
            }
        }
        };
        const transactionInfo = {
            totalPriceStatus: "FINAL",
            totalPrice: "123.45",
            currencyCode: "USD"
            };

            const merchantInfo = {
            // merchantId: '01234567890123456789', Only in PRODUCTION
            merchantName: "Your Merchant Name"
            };

            const paymentDataRequest = {
            ...googlePayBaseConfiguration,
            ...{
                allowedPaymentMethods: [cardPaymentMethod],
                transactionInfo,
                merchantInfo
            }
            };
            const tokenizationSpecification = {
                type: "PAYMENT_GATEWAY",
                parameters: {
                    gateway: "example",
                    gatewayMerchantId: "gatewayMerchantId"
                }
            };

            const tokenizationSpecification = {
                type: "PAYMENT_GATEWAY",
                parameters: {
                    gateway: "stripe",
                    "stripe:version": "v3",
                    "stripe:publishableKey": YOUR_STRIPE_PUBLISHABLE_KEY
                }
            };
    return( 
        <div>
            <nav className={styles.nav}>
            <h2>Purchase Your Jersey Here</h2>
            <ul>
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
            </ul>
        </nav>
         <div className="App">
            <h1>Click the Pay button</h1>
            <div
            onClick={processPayment}
            dangerouslySetInnerHTML={{ __html: gPayBtn && gPayBtn.innerHTML }}
            />
        </div>
        </div>
    )
}