import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function TabsComponents() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 150,
      }}
    >
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3 col-md-6 col-lg-4"
      >
        <Tab
          style={{
            maxHeight: "200px",
            overflowY: "auto",
            padding: "10px",
            border: 2,
            marginLeft: 10,
          }}
          eventKey="home"
          title="Home"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, quisquam, culpa laboriosam reiciendis provident
          assumenda repellendus sit inventore amet qui eaque debitis quos quam
          fuga totam perspiciatis doloremque. Asperiores, quia. Et aliquam iste
          repellat quidem consectetur architecto natus beatae dolorem, delectus
          distinctio! Quidem architecto provident ab. Consequuntur architecto
          magnam, accusantium labore rem tempora modi earum eius numquam
          similique! Ipsum, mollitia! Quos, doloremque molestiae. Fuga odit
          cumque voluptate adipisci tenetur sint laborum qui, perspiciatis
          maxime, quod suscipit aperiam doloribus temporibus voluptatem iste in
          debitis quas officia ratione magnam placeat nisi nulla. Doloremque
          aliquid commodi cum at! Sed quae ullam a aliquid.
        </Tab>
        <Tab
          style={{
            maxHeight: "200px",
            overflowY: "auto",
            padding: "10px",
            marginLeft: 10,
            border: 2,
          }}
          eventKey="profile"
          title="Profile"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, quisquam, culpa laboriosam reiciendis provident
          assumenda repellendus sit inventore amet qui eaque debitis quos quam
          fuga totam perspiciatis doloremque. Asperiores, quia. Et aliquam iste
          repellat quidem consectetur architecto natus beatae dolorem, delectus
          distinctio! Quidem architecto provident ab. Consequuntur architecto
          magnam, accusantium labore rem tempora modi earum eius numquam
          similique! Ipsum, mollitia! Quos, doloremque molestiae. Fuga odit
          cumque voluptate adipisci tenetur sint laborum qui, perspiciatis
          maxime, quod suscipit aperiam doloribus temporibus voluptatem iste in
          debitis quas officia ratione magnam placeat nisi nulla. Doloremque
          aliquid commodi cum at! Sed quae ullam a aliquid.
        </Tab>
        <Tab
          style={{
            maxHeight: "200px",
            overflowY: "auto",
            padding: "10px",
            marginLeft: 10,
            border: 2,
          }}
          eventKey="contact"
          title="Contact"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, quisquam, culpa laboriosam reiciendis provident
          assumenda repellendus sit inventore amet qui eaque debitis quos quam
          fuga totam perspiciatis doloremque. Asperiores, quia. Et aliquam iste
          repellat quidem consectetur architecto natus beatae dolorem, delectus
          distinctio! Quidem architecto provident ab. Consequuntur architecto
          magnam, accusantium labore rem tempora modi earum eius numquam
          similique! Ipsum, mollitia! Quos, doloremque molestiae. Fuga odit
          cumque vo
        </Tab>
      </Tabs>
    </div>
  );
}
