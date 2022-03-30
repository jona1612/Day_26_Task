import logo from './logo.svg';
import './App.css';
import Card from "./card";

function App() {
  let pricecard = [
    {
      title: "FREE",
      rate: "$0",
      features: [
        {
          name: "Single Users",
        },
        {
          name: "5GB Storage",
        },
        {
          name: "Unlimited Public Projects",
        },
        {
          name: "Community Access",
        },
        {
          name: "Unlimited Private Projects",
          mute: true
        },
        {
          name: "Dedicated Phone Support",
          mute: true
        },
        {
          name: "Free Subdomain",
          mute: true
        },
        {
          name: "Monthly Status Reports",
          mute: true
        }
      ]
    },
    {
      title: "PLUS",
      rate: "$9",
      features: [
        {
          name: "5 Users",
          bold: true
        },
        {
          name: "50GB Storage",
        },
        {
          name: "Unlimited Public Projects",
        },
        {
          name: "Community Access",
        },
        {
          name: "Unlimited Private Projects",
        },
        {
          name: "Dedicated Phone Support",
        },
        {
          name: "Free Subdomain",
        },
        {
          name: "Monthly Status Reports",
          mute: true
        }
      ]
    },
    {
      title: "PRO",
      rate: "$49",
      features: [
        {
          name: "Unlimited Users",
          bold: true
        },
        {
          name: "150GB Storage",
        },
        {
          name: "Unlimited Public Projects",
        },
        {
          name: "Community Access",
        },
        {
          name: "Unlimited Private Projects",
        },
        {
          name: "Dedicated Phone Support",
        },
        {
          names: "Unlimited",
          isBold: true,
          name: "Free Subdomains",
        },
        {
          name: "Monthly Status Reports",
        }
      ]
    }
  ]
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">

          {
            pricecard.map((k) => {
              return <Card data={k} />
            })
          }


        </div>
      </div>
    </section>

  );
}

export default App;