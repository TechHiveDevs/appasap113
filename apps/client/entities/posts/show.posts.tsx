
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
BooleanField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowPosts(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<TextField source="content" />
<NumberField source="numberoflikes" />
<BooleanField source="approved" />
<ReferenceField source="userid" reference="user" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}