<script lang="ts">
  import { Issuer } from "openid-client";

  (async () => {
    let data = await Issuer.discover(
      "http://localhost:8280/oauth/.well-known/openid-configuration"
    );
    console.log(data);
  })();
</script>
