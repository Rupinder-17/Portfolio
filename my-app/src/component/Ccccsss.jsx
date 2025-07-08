import { useState } from "react";

export function Admin() {
  const Information = [
    {
      id: "user001",
      username: "alpha_user",
      email: "alpha.user@example.com",
      isActive: true,
      isAdmin: false,
      isVerified: true,
      hasPremium: false,
      receiveNotifications: true,
    },
    {
      id: "user002",
      username: "beta_tester",
      email: "beta.tester@example.com",
      isActive: true,
      isAdmin: false,
      isVerified: false,
      hasPremium: false,
      receiveNotifications: false,
    },
    {
      id: "user003",
      username: "gamma_dev",
      email: "gamma.dev@example.com",
      isActive: true,
      isAdmin: true,
      isVerified: true,
      hasPremium: true,
      receiveNotifications: true,
    },
    {
      id: "user004",
      username: "delta_support",
      email: "delta.support@example.com",
      isActive: true,
      isAdmin: false,
      isVerified: true,
      hasPremium: false,
      receiveNotifications: false,
    },
    {
      id: "user005",
      username: "epsilon_guest",
      email: "epsilon.guest@example.com",
      isActive: false,
      isAdmin: false,
      isVerified: false,
      hasPremium: false,
      receiveNotifications: false,
    },
    {
      id: "user006",
      username: "zeta_marketing",
      email: "zeta.marketing@example.com",
      isActive: true,
      isAdmin: true,
      isVerified: true,
      hasPremium: true,
      receiveNotifications: true,
    },
    {
      id: "user007",
      username: "eta_intern",
      email: "eta.intern@example.com",
      isActive: true,
      isAdmin: false,
      isVerified: false,
      hasPremium: false,
      receiveNotifications: true,
    },
    {
      id: "user008",
      username: "theta_analyst",
      email: "theta.analyst@example.com",
      isActive: true,
      isAdmin: false,
      isVerified: true,
      hasPremium: true,
      receiveNotifications: false,
    },
    {
      id: "user009",
      username: "iota_consultant",
      email: "iota.consultant@example.com",
      isActive: false,
      isAdmin: true,
      isVerified: true,
      hasPremium: false,
      receiveNotifications: true,
    },
    {
      id: "user010",
      username: "kappa_manager",
      email: "kappa.manager@example.com",
      isActive: true,
      isAdmin: true,
      isVerified: true,
      hasPremium: true,
      receiveNotifications: true,
    },
    {
      id: "user011",
      username: "lambda_newbie",
      email: "lambda.newbie@example.com",
      isActive: true,
      isAdmin: false,
      isVerified: false,
      hasPremium: false,
      receiveNotifications: true,
    },
  ];
  const [filterInformation, setFilterInformation] = useState(Information);

  return (
    <div>
      <div>
        <label htmlFor="isverify">Filter by verify</label>
        <input
          id="isverify"
          type="checkbox"
          onChange={(e) => {
            console.log(e.target.checked);
            if (e.target.checked) {
              let filteredData = Information.filter((item) => {
                if (item.isVerified == true) {
                  return item;
                }
              });
              setFilterInformation(filteredData);
            } else {
              setFilterInformation(Information);
            }
          }}
        />
      </div>
      <div>
        <label htmlFor="haspremium">has premium</label>
        <input
          id="haspremium"
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              let premium = Information.filter((item) => {
                if (item.hasPremium == true) {
                  return item;
                }
              });
              setFilterInformation(premium);
              console.log(premium);
            } else {
              setFilterInformation(Information);
            }
          }}
        />
      </div>
      <div>
        <label htmlFor="receiveNotifications">receiveNotifications</label>
        <input
          id="receiveNotifications"
          type="checkbox"
          onChange={(e) => {
            console.log(e);

            if (e.target.checked) {
              let receive = Information.filter((item) => {
                if (item.receiveNotifications == true) {
                  return item;
                }
              });
              setFilterInformation(receive);
            } else {
              setFilterInformation(Information);
            }
          }}
        />
      </div>
      <div>
        <table
          style={{
            border: "2px solid black",
            textAlign: "center",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "right 2px solid black" }}>id</th>
              <th>username</th>
              <th>email</th>
              <th>isActive</th>
              <th>isverify</th>
              <th>hasPremium</th>
              <th>receiveNotifications</th>
            </tr>
          </thead>
          <tbody>
            {filterInformation.map((item, index) => (
              <tr
                key={index}
                style={{
                  borderTop: "2px solid green",
                }}
              >
                <td
                  style={{
                    borderRight: " 2px solid ",
                  }}
                >
                  {item.id}
                </td>
                <td
                  style={{
                    borderRight: " 2px solid ",
                  }}
                >
                  {item.username}
                </td>
                <td
                  style={{
                    borderRight: " 2px solid ",
                  }}
                >
                  {item.email}
                </td>
                <td
                  style={{
                    borderRight: " 2px solid ",
                  }}
                >
                  {item.isActive ? "active" : "inactive"}
                </td>
                <td
                  style={{
                    borderRight: " 2px solid ",
                  }}
                >
                  {item.isAdmin ? "admin" : "user"}
                </td>
                <td
                  style={{
                    borderRight: " 2px solid ",
                  }}
                >
                  {item.isVerified ? "verified" : "not verified"}
                </td>
                <td
                  style={{
                    borderRight: " 2px solid ",
                  }}
                >
                  {item.hasPremium ? "haspremium" : "nonpremium"}
                </td>
                <td
                  style={{
                    borderRight: " 2px solid ",
                  }}
                >
                  {item.receiveNotifications ? "yes" : "no"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
         
    </div>
  );
}
