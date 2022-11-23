
import { 
  Edit,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditComments(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="content" variant="outlined"   />
<ReferenceInput label="posts" source="postsid" reference="posts">
        <AutocompleteInput variant="outlined" /* optionText="posts"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}