import { Header, Accordion, List, Image, Icon, Label } from "semantic-ui-react";
import Segment from "../ui/Segment";
import Button from "../ui/Button";
import { useRouter } from "next/router";
import formatDate from "../../utils/formatDate";

function AccountOrders({ orders }) {
  const router = useRouter();

  function mapOrdersToPanels(orders) {
    return orders.map(order => ({
      key: order._id,
      title: {
        content: <Label color="blue" content={formatDate(order.createdAt)} />
      },
      content: {
        content: (
          <>
            <List.Header as="h3">
              Total: ${order.total}
              <Label content={order.email} icon="mail" basic horizontal />
            </List.Header>
            <List>
              <>
                {order.products.map((p, i) => (
                  <List.Item key={i}>
                    <Image avatar src={p.product.mediaUrl} />
                    <List.Content>
                      <List.Header>{p.product.name}</List.Header>
                      <List.Description>
                        <p>Quantity: {p.quantity}</p>
                        <p>Price: ${p.product.price}</p>
                      </List.Description>
                    </List.Content>
                    <List.Content floated="right">
                      <Label tag color="red" size="tiny">
                        {p.product.sku}
                      </Label>
                    </List.Content>
                  </List.Item>
                ))}
              </>
            </List>
          </>
        )
      }
    }));
  }

  return (
    <>
      <h2>Order History</h2>

      {orders.length === 0 ? (
        <Segment inverted tertiary>
          <Header>
            <Icon name="copy outline" />
            No past orders.
          </Header>
          <div>
            <Button
              onClick={() => {
                router.push("/");
              }}
              label="View Products"
            />
          </div>
        </Segment>
      ) : (
        <Accordion
          fluid
          styled
          exclusive={false}
          panels={mapOrdersToPanels(orders)}
        />
      )}
    </>
  );
}

export default AccountOrders;
