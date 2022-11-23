
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowComments(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<TextField source="content" />
<ReferenceField source="postsid" reference="posts" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}