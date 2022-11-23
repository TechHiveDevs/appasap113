
import { 
  Edit,
  SimpleForm,
  
required,
TextInput,
NumberInput,
BooleanInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditPosts(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="content" variant="outlined" validate={required()}  />
<NumberInput source="numberoflikes" variant="outlined"  />
<BooleanInput source="approved" variant="outlined"  />
<ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}