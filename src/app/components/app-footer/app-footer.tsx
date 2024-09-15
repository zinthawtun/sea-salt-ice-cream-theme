import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function FooterBar() {
  return (
    <Container component="footer" maxWidth="xl" color="primary">
      <Divider />
      <Box sx={{ bottom: 0, width: "100%" }}>
        <Typography
          color="black"
          sx={{ textAlign: "left", paragraph: "false" }}
        >
          Version: V0.1
        </Typography>
        <Typography
          color="black"
          sx={{ textAlign: "center", paragraph: "false" }}
        >
          Created By ZinThawTun.Dev
        </Typography>
      </Box>
    </Container>
  );
}
